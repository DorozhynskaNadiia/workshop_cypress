function cov_20c947pp9t() {
  var path = "/Users/ndorozhynska/Documents/cypress_workshop/react-redux-realworld-example-app/src/reducer.js";
  var hash = "e5f5d78f8e899bfee9fde701089efc2a63b5c532";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/ndorozhynska/Documents/cypress_workshop/react-redux-realworld-example-app/src/reducer.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e5f5d78f8e899bfee9fde701089efc2a63b5c532"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_20c947pp9t = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_20c947pp9t();
import article from './reducers/article';
import articleList from './reducers/articleList';
import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import editor from './reducers/editor';
import home from './reducers/home';
import profile from './reducers/profile';
import settings from './reducers/settings';
import { routerReducer } from 'react-router-redux';
export default combineReducers({
  article,
  articleList,
  auth,
  common,
  editor,
  home,
  profile,
  settings,
  router: routerReducer
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXIuanMiXSwibmFtZXMiOlsiYXJ0aWNsZSIsImFydGljbGVMaXN0IiwiYXV0aCIsImNvbWJpbmVSZWR1Y2VycyIsImNvbW1vbiIsImVkaXRvciIsImhvbWUiLCJwcm9maWxlIiwic2V0dGluZ3MiLCJyb3V0ZXJSZWR1Y2VyIiwicm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsT0FBUCxNQUFvQixvQkFBcEI7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLHdCQUF4QjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsaUJBQWpCO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxPQUFoQztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLGlCQUFqQjtBQUNBLE9BQU9DLE9BQVAsTUFBb0Isb0JBQXBCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixxQkFBckI7QUFDQSxTQUFTQyxhQUFULFFBQThCLG9CQUE5QjtBQUVBLGVBQWVOLGVBQWUsQ0FBQztBQUM3QkgsRUFBQUEsT0FENkI7QUFFN0JDLEVBQUFBLFdBRjZCO0FBRzdCQyxFQUFBQSxJQUg2QjtBQUk3QkUsRUFBQUEsTUFKNkI7QUFLN0JDLEVBQUFBLE1BTDZCO0FBTTdCQyxFQUFBQSxJQU42QjtBQU83QkMsRUFBQUEsT0FQNkI7QUFRN0JDLEVBQUFBLFFBUjZCO0FBUzdCRSxFQUFBQSxNQUFNLEVBQUVEO0FBVHFCLENBQUQsQ0FBOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXJ0aWNsZSBmcm9tICcuL3JlZHVjZXJzL2FydGljbGUnO1xuaW1wb3J0IGFydGljbGVMaXN0IGZyb20gJy4vcmVkdWNlcnMvYXJ0aWNsZUxpc3QnO1xuaW1wb3J0IGF1dGggZnJvbSAnLi9yZWR1Y2Vycy9hdXRoJztcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBjb21tb24gZnJvbSAnLi9yZWR1Y2Vycy9jb21tb24nO1xuaW1wb3J0IGVkaXRvciBmcm9tICcuL3JlZHVjZXJzL2VkaXRvcic7XG5pbXBvcnQgaG9tZSBmcm9tICcuL3JlZHVjZXJzL2hvbWUnO1xuaW1wb3J0IHByb2ZpbGUgZnJvbSAnLi9yZWR1Y2Vycy9wcm9maWxlJztcbmltcG9ydCBzZXR0aW5ncyBmcm9tICcuL3JlZHVjZXJzL3NldHRpbmdzJztcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBhcnRpY2xlLFxuICBhcnRpY2xlTGlzdCxcbiAgYXV0aCxcbiAgY29tbW9uLFxuICBlZGl0b3IsXG4gIGhvbWUsXG4gIHByb2ZpbGUsXG4gIHNldHRpbmdzLFxuICByb3V0ZXI6IHJvdXRlclJlZHVjZXJcbn0pO1xuIl19