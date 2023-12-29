import { BlockItemDtoType, accountControllerGetAccount, authControllerGetSessionInfo, blockListControllerGetList } from "@/5-shared/api/generated";
import { NetRule, NetRuleActionType, NetRuleResourceTypes, setBrowserInterval, setNetRules } from "@/5-shared/lib/browser";

export function startUpdateBlockRules() {
    setBrowserInterval('update-block-rules', async () => {
        const isAuth = await authControllerGetSessionInfo().then(() => true, () => false);

        if (!isAuth) {
            return await setNetRules([]);
        };

        const isBlockingEnabled = await accountControllerGetAccount().then(r => r.isBlockingEnabled)

        if (!isBlockingEnabled) {
            return await setNetRules([]);
        };

        setNetRules(await getBlockListNetRules());
    }, 5 *1000);
}

async function getBlockListNetRules() {
    const blockList = await blockListControllerGetList();

    return blockList.items
        .filter((item) => item.type === BlockItemDtoType.Website)
        .map((item): NetRule => ({
            id: item.id,
            action: {type: NetRuleActionType.BLOCK},
            condition: item.data.startsWith('regexp:') ? {
                regexFilter: item.data.replace('regexp:', ''),
                resourceTypes: [NetRuleResourceTypes.MAIN_FRAME]
            } : {
                urlFilter: item.data,
                resourceTypes: [NetRuleResourceTypes.MAIN_FRAME]
            }
        }))
}