import { datadogRum } from "@datadog/browser-rum";
import { Middleware } from "redux";


const datadogMiddleware: Middleware = store => next => action => {
    // Sendundefinedaction to Datadog
    datadogRum.addAction(action.type, action);  
    // Pass action to next middleware or reducer
    return next(action);
  };

export default datadogMiddleware;

export {};