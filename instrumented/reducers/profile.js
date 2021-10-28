function cov_2j31hnzdeq() {
  var path = "/Users/ndorozhynska/Documents/cypress_workshop/react-redux-realworld-example-app/src/reducers/profile.js";
  var hash = "5cd449d91e6339545a9d1202fff34290fdabf0e2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/ndorozhynska/Documents/cypress_workshop/react-redux-realworld-example-app/src/reducers/profile.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "1": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 13,
          column: 8
        }
      },
      "2": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 16
        }
      },
      "3": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 20,
          column: 8
        }
      },
      "4": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 15
          },
          end: {
            line: 8,
            column: 16
          }
        },
        loc: {
          start: {
            line: 8,
            column: 39
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 8
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 16
          },
          end: {
            line: 8,
            column: 26
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 8,
            column: 24
          },
          end: {
            line: 8,
            column: 26
          }
        }],
        line: 8
      },
      "1": {
        loc: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 13,
            column: 8
          }
        }, {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 15,
            column: 16
          }
        }, {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 21
          }
        }, {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 20,
            column: 8
          }
        }, {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 22,
            column: 19
          }
        }],
        line: 9
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5cd449d91e6339545a9d1202fff34290fdabf0e2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2j31hnzdeq = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2j31hnzdeq();
import { PROFILE_PAGE_LOADED, PROFILE_PAGE_UNLOADED, FOLLOW_USER, UNFOLLOW_USER } from '../constants/actionTypes';
export default ((state = (cov_2j31hnzdeq().b[0][0]++, {}), action) => {
  cov_2j31hnzdeq().f[0]++;
  cov_2j31hnzdeq().s[0]++;

  switch (action.type) {
    case PROFILE_PAGE_LOADED:
      cov_2j31hnzdeq().b[1][0]++;
      cov_2j31hnzdeq().s[1]++;
      return { ...action.payload[0].profile
      };

    case PROFILE_PAGE_UNLOADED:
      cov_2j31hnzdeq().b[1][1]++;
      cov_2j31hnzdeq().s[2]++;
      return {};

    case FOLLOW_USER:
      cov_2j31hnzdeq().b[1][2]++;

    case UNFOLLOW_USER:
      cov_2j31hnzdeq().b[1][3]++;
      cov_2j31hnzdeq().s[3]++;
      return { ...action.payload.profile
      };

    default:
      cov_2j31hnzdeq().b[1][4]++;
      cov_2j31hnzdeq().s[4]++;
      return state;
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuanMiXSwibmFtZXMiOlsiUFJPRklMRV9QQUdFX0xPQURFRCIsIlBST0ZJTEVfUEFHRV9VTkxPQURFRCIsIkZPTExPV19VU0VSIiwiVU5GT0xMT1dfVVNFUiIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJwcm9maWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLFNBQ0VBLG1CQURGLEVBRUVDLHFCQUZGLEVBR0VDLFdBSEYsRUFJRUMsYUFKRixRQUtPLDBCQUxQO0FBT0EsZ0JBQWUsQ0FBQ0MsS0FBSyxnQ0FBRyxFQUFILENBQU4sRUFBYUMsTUFBYixLQUF3QjtBQUFBO0FBQUE7O0FBQ3JDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtOLG1CQUFMO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFDTCxHQUFHSyxNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFmLEVBQWtCQztBQURoQixPQUFQOztBQUdGLFNBQUtQLHFCQUFMO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFBUDs7QUFDRixTQUFLQyxXQUFMO0FBQUE7O0FBQ0EsU0FBS0MsYUFBTDtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQ0wsR0FBR0UsTUFBTSxDQUFDRSxPQUFQLENBQWVDO0FBRGIsT0FBUDs7QUFHRjtBQUFBO0FBQUE7QUFDRSxhQUFPSixLQUFQO0FBYko7QUFlRCxDQWhCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFBST0ZJTEVfUEFHRV9MT0FERUQsXG4gIFBST0ZJTEVfUEFHRV9VTkxPQURFRCxcbiAgRk9MTE9XX1VTRVIsXG4gIFVORk9MTE9XX1VTRVJcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBQUk9GSUxFX1BBR0VfTE9BREVEOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRbMF0ucHJvZmlsZVxuICAgICAgfTtcbiAgICBjYXNlIFBST0ZJTEVfUEFHRV9VTkxPQURFRDpcbiAgICAgIHJldHVybiB7fTtcbiAgICBjYXNlIEZPTExPV19VU0VSOlxuICAgIGNhc2UgVU5GT0xMT1dfVVNFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLnByb2ZpbGVcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcbiJdfQ==