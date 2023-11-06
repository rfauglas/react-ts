import { datadogRum } from "@datadog/browser-rum";
import { DATADOG_TOKEN } from "./env";


datadogRum.init({
    applicationId: '0aefaa22-cd5b-497b-bd1a-a3f0566b6872',
    clientToken:  DATADOG_TOKEN, // process.env.DATADOG_CLIENT_TOKEN || '',
    site: 'datadoghq.com',
    service: 'ronan_poc',
    env: 'sandbox',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0', 
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    actionNameAttribute: "data-testid",
    trackResources: true,
    trackLongTasks: true,
    // defaultPrivacyLevel: 'mask-user-input',
  });


  
  export {}