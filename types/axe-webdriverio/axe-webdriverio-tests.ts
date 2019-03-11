import { Result, RunOptions, Spec } from "axe-core";
import { AxeWebDriverIOBuilder, AxeAnalysis } from "axe-webdriverio";
import { WebDriver } from "selenium-webdriver";

const inTest = async (webDriver: WebDriver) => {
    const builderCalled: AxeWebDriverIOBuilder = AxeWebDriverIOBuilder(
        webDriver
    );
    const builderNewed: AxeWebDriverIOBuilder = new AxeWebDriverIOBuilder(
        webDriver
    );

    const runOptions: RunOptions = {};
    const spec: Spec = {};

    const analysis: AxeAnalysis = await AxeWebDriverIOBuilder(webDriver)
        .include("include")
        .exclude("exclude")
        .options(runOptions)
        .withRules("rule")
        .withRules(["rule", "rule"])
        .withTags("tag")
        .withTags(["tag", "tag"])
        .disableRules("rule")
        .disableRules(["rule", "rule"])
        .configure(spec)
        .analyze((internalResults: AxeAnalysis) => {});

    const inapplicable: Result[] = analysis.inapplicable;
    const incomplete: Result[] = analysis.incomplete;
    const passes: Result[] = analysis.passes;
    const timestamp: string = analysis.timestamp;
    const url: string = analysis.url;
    const violations: Result[] = analysis.violations;
};
