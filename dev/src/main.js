import { config } from './views/message'

const supportedAPI = ['config'] // enlist all methods supported by API (e.g. `mw('event', 'user-login');`)

/*
    The main entry of the application
*/
function app(window) {
  // set default configurations
  let configurations = {
    message: false,
    users: false,
    floatLeft: false,
    showMessageAlways: false,
    useCookies: false,
    useAnimations: false,
    useDarkTheme: false,
  }

  // all methods that were called till now and stored in queue
  // needs to be called now 
  let globalObject = window[window['ww']]
  let queue = globalObject.q
  if (queue) {
    for (let i = 0; i < queue.length; i++) {
      apiHandler(queue[i][0], queue[i][1])
    }
  }

  // override temporary (until the app loaded) handler
  // for widget's API calls
  globalObject = apiHandler
  globalObject.configurations = configurations
}

/*
    Method that handles all API calls
*/
function apiHandler(api, params) {
  if (!api) throw Error('API method required')
    api = api.toLowerCase()

  if (supportedAPI.indexOf(api) === -1) throw Error(`Method ${api} is not supported`)

  switch (api) {
    // TODO: add API implementation
    case 'config':
      config(params)
    break
    default:
      console.warn(`No handler defined for ${api}`)
  }
}

app(window)