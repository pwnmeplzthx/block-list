export const createTab = (url: string) => {
    chrome.tabs.create({ url });
}

export type NetRule = chrome.declarativeNetRequest.Rule;
export const NetRuleActionType = chrome.declarativeNetRequest.RuleActionType;
export const NetRuleResourceTypes = chrome.declarativeNetRequest.ResourceType;

export const setNetRules = async (newRules: NetRule[]) => {
    const oldRules = await chrome.declarativeNetRequest.getDynamicRules();
    const oldRuleIds = oldRules.map(rule => rule.id);

    // Use the arrays to update the dynamic rules
    await chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: oldRuleIds,
        addRules: newRules
    });
}

export const setBrowserInterval = async (name: string, bg: () => void, timeout: number) => {
    await chrome.alarms.create(name, {
        delayInMinutes: timeout / (1000 * 60),
        periodInMinutes: timeout / (1000 * 60),
    });

    chrome.alarms.onAlarm.addListener((alarm) => {
        if (name === alarm.name) {
            bg();
        }
    });
}

export const addInstallListener = (callBack: () => Awaited<void>) => {
    chrome.runtime.onInstalled.addListener(async ({ reason }) => {
        if (reason !== 'install') {
            return;
        }
      
        await callBack();
    });
}

let currentIcon: string = '';
export const setIcon = (url: string) => {
    if (url !== currentIcon) {
        currentIcon = url;
        chrome.action.setIcon({
            path: chrome.runtime.getURL(url)
        });
    }
    
}