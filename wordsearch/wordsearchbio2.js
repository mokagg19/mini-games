  (function e(t, n, r) { function s(o, u) { if (!n[o]) { if (!t[o]) { var a = typeof require == "function" && require; if (!u && a) return a(o, !0); if (i) return i(o, !0); throw new Error("Cannot find module '" + o + "'") } var f = n[o] = { exports: {} }; t[o][0].call(f.exports, function (e) { var n = t[o][1][e]; return s(n ? n : e) }, f, f.exports, e, t, n, r) } return n[o].exports } var i = typeof require == "function" && require; for (var o = 0; o < r.length; o++)s(r[o]); return s })({
    1: [function (require, module, exports) {
      (function (global) {
        (function () {
          var ALPHABET, Cell, DIRECTIONS, LetterGrid, NUM_COLORS, angular, defaultWordlist, wordFromPath, _,
            __indexOf = [].indexOf || function (item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

          angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

          _ = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null);

          defaultWordlist = require('./wordlist');

          NUM_COLORS = 5;

          ALPHABET = 'AABBCCDDEEFFGGHHIIJKLLMMNNOOPPQRSSTTUUVWXYZ';

          DIRECTIONS = _.shuffle([[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]);

          wordFromPath = function (path) {
            var cell, word, _i, _len;
            word = '';
            if (path != null) {
              for (_i = 0, _len = path.length; _i < _len; _i++) {
                cell = path[_i];
                word += cell.letter;
              }
            }
            return word;
          };

          Cell = (function () {
            function Cell(x, y) {
              this.x = x;
              this.y = y;
              this.solvedColorClasses = [];
              this.isSelected = false;
              this.onPath = false;
              this.onCorrectPath = false;
            }

            Cell.prototype.willFitLetter = function (letter) {
              return (this.letter == null) || this.letter === letter;
            };

            Cell.prototype.randomFill = function () {
              if (this.letter == null) {
                return this.letter = _.sample(ALPHABET);
              }
            };

            return Cell;

          })();

          LetterGrid = (function () {
            function LetterGrid(width, height, maxWords, wordlist) {
              var cell, i, row, word, x, y, _i, _j, _k, _l, _len, _len1, _len2, _ref;
              this.width = width != null ? width : 8;
              this.height = height != null ? height : 8;
              if (maxWords == null) {
                maxWords = 20;
              }
              if (wordlist == null) {
                wordlist = defaultWordlist;
              }
              this.cells = (function () {
                var _i, _ref, _results;
                _results = [];
                for (y = _i = 0, _ref = this.height - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; y = 0 <= _ref ? ++_i : --_i) {
                  _results.push((function () {
                    var _j, _ref1, _results1;
                    _results1 = [];
                    for (x = _j = 0, _ref1 = this.width - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; x = 0 <= _ref1 ? ++_j : --_j) {
                      _results1.push(new Cell(x, y));
                    }
                    return _results1;
                  }).call(this));
                }
                return _results;
              }).call(this);
              this.words = [];
              wordlist = _.sortBy(_.shuffle(wordlist), function (word) {
                return -1 * word.length;
              });
              for (i = _i = 1; 1 <= maxWords ? _i <= maxWords : _i >= maxWords; i = 1 <= maxWords ? ++_i : --_i) {
                for (_j = 0, _len = wordlist.length; _j < _len; _j++) {
                  word = wordlist[_j];
                  if (__indexOf.call(this.words, word) < 0) {
                    if (this._tryPutWord(word)) {
                      break;
                    }
                  }
                }
              }
              _ref = this.cells;
              for (_k = 0, _len1 = _ref.length; _k < _len1; _k++) {
                row = _ref[_k];
                for (_l = 0, _len2 = row.length; _l < _len2; _l++) {
                  cell = row[_l];
                  cell.randomFill();
                }
              }
              this.words = _.sortBy(this.words, function (word) {
                return -1 * word.length;
              });
            }

            LetterGrid.prototype._tryPutWord = function (word) {
              var cell, dirX, dirY, endX, endY, i, path, startX, startY, _i, _j, _len, _len1, _ref;
              _ref = DIRECTIONS[this.words.length % DIRECTIONS.length], dirX = _ref[0], dirY = _ref[1];
              if (dirX !== 0 && word.length > this.width || dirY !== 0 && word.length > this.height) {
                return false;
              }
              startX = _.random((dirX === -1 ? word.length - 1 : 0), (dirX === 1 ? this.width - word.length : this.width - 1));
              startY = _.random((dirY === -1 ? word.length - 1 : 0), (dirY === 1 ? this.height - word.length : this.height - 1));
              endX = startX + dirX * (word.length - 1);
              endY = startY + dirY * (word.length - 1);
              path = this._getPath([startX, startY], [endX, endY]);
              for (i = _i = 0, _len = path.length; _i < _len; i = ++_i) {
                cell = path[i];
                if (!cell.willFitLetter(word[i])) {
                  return false;
                }
              }
              for (i = _j = 0, _len1 = path.length; _j < _len1; i = ++_j) {
                cell = path[i];
                cell.letter = word[i];
              }
              this.words.push(word);
              return true;
            };

            LetterGrid.prototype._getPath = function (start, end) {
              var cellList, diffX, diffY, endX, endY, stepX, stepY, x, y;
              x = start[0], y = start[1];
              endX = end[0], endY = end[1];
              diffX = endX - x;
              diffY = endY - y;
              stepX = diffX === 0 ? 0 : diffX / Math.abs(diffX);
              stepY = diffY === 0 ? 0 : diffY / Math.abs(diffY);
              cellList = [];
              while (x >= 0 && y >= 0 && x < this.width && y < this.height) {
                cellList.push(this.cells[y][x]);
                if (x === endX && y === endY) {
                  return cellList;
                }
                x += stepX;
                y += stepY;
              }
              return null;
            };

            LetterGrid.prototype.getPathFromCells = function (start, end) {
              return this._getPath([start.x, start.y], [end.x, end.y]);
            };

            return LetterGrid;

          })();

          angular.module('wordsearchApp', []).controller('WordsearchCtrl', [
            '$scope', function ($scope) {
              $scope.levels = [
                {
                  width: 8,
                  height: 8
                }, {
                  width: 9,
                  height: 9
                }, {
                  width: 10,
                  height: 10
                }, {
                  width: 11,
                  height: 11
                }
              ];
              $scope.loadLevel = function (level) {
                $scope.currentLevel = level;
                $scope.grid = new LetterGrid(level.width, level.height);
                $scope.words = $scope.grid.words;
                $scope.foundWords = [];
                $scope.enableInput = true;
                $scope.colorIndex = 1;
                return $scope.colorClass = 'color1';
              };
              $scope.loadLevel($scope.levels[0]);
              $scope.cellClicked = function (cell) {
                var path;
                if (!$scope.enableInput) {
                  return;
                }
                if ($scope.selectedCell == null) {
                  cell.isSelected = true;
                  return $scope.selectedCell = cell;
                } else {
                  path = $scope.grid.getPathFromCells($scope.selectedCell, cell);
                  $scope.selectedCell.isSelected = false;
                  $scope.selectedCell = null;
                  $scope._submitPath(path);
                  return $scope.clearPath();
                }
              };
              $scope.updatePath = function (cell) {
                var path, _i, _len, _ref, _results;
                if ($scope.selectedCell != null) {
                  path = $scope.grid.getPathFromCells($scope.selectedCell, cell);
                  if (path != null) {
                    _results = [];
                    for (_i = 0, _len = path.length; _i < _len; _i++) {
                      cell = path[_i];
                      cell.onPath = true;
                      if (_ref = wordFromPath(path), __indexOf.call($scope.words, _ref) >= 0) {
                        _results.push(cell.onCorrectPath = true);
                      } else {
                        _results.push(void 0);
                      }
                    }
                    return _results;
                  }
                }
              };
              $scope.clearPath = function () {
                var cell, row, _i, _len, _ref, _results;
                _ref = $scope.grid.cells;
                _results = [];
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                  row = _ref[_i];
                  _results.push((function () {
                    var _j, _len1, _results1;
                    _results1 = [];
                    for (_j = 0, _len1 = row.length; _j < _len1; _j++) {
                      cell = row[_j];
                      cell.onPath = false;
                      _results1.push(cell.onCorrectPath = false);
                    }
                    return _results1;
                  })());
                }
                return _results;
              };
              $scope._submitPath = function (path) {
                var alertCongrats, cell, foundWord, _i, _len;
                foundWord = wordFromPath(path);
                if (__indexOf.call($scope.words, foundWord) >= 0) {
                  $scope.words.splice($scope.words.indexOf(foundWord), 1);
                  $scope.foundWords.unshift({
                    word: foundWord,
                    colorClass: $scope.colorClass
                  });
                  for (_i = 0, _len = path.length; _i < _len; _i++) {
                    cell = path[_i];
                    cell.solvedColorClasses.push($scope.colorClass);
                  }
                  $scope.nextColor();
                  if ($scope.words.length === 0) {
                    $scope.enableInput = false;
                    alertCongrats = function () {
                      return alert("&iexcl;Felicidades! Encontraste las " + $scope.foundWords.length + " palabras. Selecciona otra dificultad en el menú para volver a jugar.");
                    };
                    return setTimeout(alertCongrats, 400);
                  }
                }
              };
              return $scope.nextColor = function () {
                $scope.colorIndex = $scope.colorIndex % NUM_COLORS + 1;
                return $scope.colorClass = "color" + $scope.colorIndex;
              };
            }
          ]);

        }).call(this);

      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, { "./wordlist": 2 }], 2: [function (require, module, exports) {
      (function () {
        module.exports = ['PRIMORDIO', 'SOPA', 'CARBONO', 'NITROGENO', 'OXIGENO', 'AZUFRE', 'PROTOPLASMA', 'TIERRA',  'INORGANICAS', 'ORGANICAS', 'MINERALES', 'CALCIO', 'FOSFORO',  'MAGNESIO', 'GASES', 'AGUA', 'POLARIDAD', 'SOLVENTE', 'IONES', 'FOTOSINTESIS', 'AZUCARES', 'GRASAS', 'PROTEINAS', 'VITAMINAS', 'HIDROSOLUBLES', 'LIPOSOLUBLES', 'TIAMINA', 'RIBOFLAVINA', 'CIANOCOBALAMINA', 'RETINOL', 'TOCOFEROL', 'COENZIMAS', 'ANTIOXIDANTE', 'ANTIHEMORRAGICO', 'COLESTEROL', 'ALIMENTOS', 'SODIO', 'POTASIO', 'HEMOGLOBINA', 'AVITAMINOSIS', 'HIPOVITAMINOSIS'];

      }).call(this);

    }, {}]
  }, {}, [1])