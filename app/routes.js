// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
// System.import('containers/YourComponent/sagas'),

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);
  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
          System.import('containers/NavigationContainer/reducer'),
          System.import('containers/NavigationContainer/sagas'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([
          component,
          navigationReducer,
          navigationSagas,
        ]) => {
          injectReducer('navigationContainer', navigationReducer.default);
          injectSagas('home', navigationSagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: '/topics/:topicName',
          name: 'linksForTopic',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/LinkListContainer'),
              System.import('containers/LinkListContainer/reducer'),
              System.import('containers/LinkListContainer/sagas'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([
              component,
              linkListReducer,
              linkListSagas,
            ]) => {
              injectReducer('linkListContainer', linkListReducer.default);
              injectSagas('linkList', linkListSagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
        {
          path: '/login',
          name: 'login',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/LoginContainer'),
              System.import('containers/LoginContainer/reducer'),
              System.import('containers/LoginContainer/sagas'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([
              component,
              reducer,
              sagas,
            ]) => {
              injectReducer('loginContainer', reducer.default);
              injectSagas('login', sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
        {
          path: '/topics/:topicName/add',
          name: 'topicAdd',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/FormContainer'),
              System.import('containers/FormContainer/reducer'),
              System.import('containers/FormContainer/sagas'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([
              component,
              reducer,
              sagas,
            ]) => {
              injectReducer('formContainer', reducer.default);
              injectSagas('form', sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
      ],
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
