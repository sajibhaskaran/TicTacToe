$(document).ready(function() {
  $("#message").css('display', 'block');// asking to choose the tile.
});
x = 'x';
o = 'o';
player = '';
computer = '';
// starting the game according to tile chosen.
$("#btnx").click(function() {
  $("#message").css('display', 'none');
  player = 'x';
  computer = 'o'
  computerturn(computer);

});
$("#btno").click(function() {
  $("#message").css('display', 'none');
  player = 'o';
  computer = 'x';
  computerturn(computer);

});
//arrays to get a track to turns played.
used = [1, 2, 3, 4, 5, 6, 7, 8, 9];
checked = []
isResult = false;

$("td").click(function() {
  var index;
  index = parseInt($(this).attr("id"));
  playerturn(index);
  computerturn(computer);

});
// function to show player's moves.
function playerturn(index) {
  var id = "#" + index;
  if (checkused(index) && !isResult) {
    $(id).text(player);
    checkwinner();// checking to see if anybody won before player turn allows.
    used.splice(used.indexOf(index), 1);
    checked[index] = player;
  }
}

function checkused(x) { // to see if a box is empty.
  for (var i = 0; i <= used.length; i++) {
    if (x == used[i]) return true;
  }
}

function computerturn(a) {// some logic built into computerturn function
  var tile = a;
  var random = used[Math.floor(Math.random() * used.length)]
  var id = "#" + random;

  checkwinner();
  if (!isResult) {
    if (checked[1] == "o" && checked[2] == 'o' && checked[3] == undefined) {
      playwinner(3, tile);
    } else if (checked[1] == "o" && checked[3] == 'o' && checked[2] == undefined) {
      playwinner(2, tile);
    } else if (checked[2] == "o" && checked[3] == 'o' && checked[1] == undefined) {
      playwinner(1, tile);
    } else if (checked[4] == "o" && checked[5] == 'o' && checked[6] == undefined) {
      playwinner(6, tile);
    } else if (checked[4] == "o" && checked[6] == 'o' && checked[5] == undefined) {
      playwinner(5, tile);
    } else if (checked[5] == "o" && checked[6] == 'o' && checked[4] == undefined) {
      playwinner(4, tile);
    } else if (checked[7] == "o" && checked[8] == 'o' && checked[9] == undefined) {
      playwinner(9, tile);
    } else if (checked[7] == "o" && checked[9] == 'o' && checked[8] == undefined) {
      playwinner(8, tile);
    } else if (checked[8] == "o" && checked[9] == 'o' && checked[7] == undefined) {
      playwinner(7, tile);
    } else if (checked[1] == "o" && checked[4] == 'o' && checked[7] == undefined) {
      playwinner(7, tile);
    } else if (checked[1] == "o" && checked[7] == 'o' && checked[4] == undefined) {
      playwinner(4, tile);
    } else if (checked[4] == "o" && checked[7] == 'o' && checked[1] == undefined) {
      playwinner(1, tile);
    } else if (checked[2] == "o" && checked[5] == 'o' && checked[8] == undefined) {
      playwinner(8, tile);
    } else if (checked[2] == "o" && checked[8] == 'o' && checked[5] == undefined) {
      playwinner(5, tile);
    } else if (checked[5] == "o" && checked[8] == 'o' && checked[2] == undefined) {
      playwinner(2, tile);
    } else if (checked[3] == "o" && checked[6] == 'o' && checked[9] == undefined) {
      playwinner(9, tile);
    } else if (checked[3] == "o" && checked[9] == 'o' && checked[6] == undefined) {
      playwinner(6, tile);
    } else if (checked[6] == "o" && checked[9] == 'o' && checked[3] == undefined) {
      playwinner(3, tile);
    } else if (checked[1] == "o" && checked[5] == 'o' && checked[9] == undefined) {
      playwinner(9, tile);
    } else if (checked[1] == "o" && checked[9] == 'o' && checked[5] == undefined) {
      playwinner(5, tile);
    } else if (checked[5] == "o" && checked[9] == 'o' && checked[1] == undefined) {
      playwinner(1, tile);
    } else if (checked[3] == "o" && checked[5] == 'o' && checked[7] == undefined) {
      playwinner(7, tile);
    } else if (checked[3] == "o" && checked[7] == 'o' && checked[5] == undefined) {
      playwinner(5, tile);
    } else if (checked[5] == "o" && checked[7] == 'o' && checked[3] == undefined) {
      playwinner(3, tile);
    } else if (checked[1] == "x" && checked[2] == 'x' && checked[3] == undefined) {
      playwinner(3, tile);
    } else if (checked[1] == "x" && checked[2] == 'x' && checked[3] == undefined) {
      playwinner(3, tile);
    } else if (checked[2] == "x" && checked[3] == 'x' && checked[1] == undefined) {
      playwinner(1, tile);
    } else if (checked[1] == "x" && checked[3] == 'x' && checked[2] == undefined) {
      playwinner(2, tile);
    } else if (checked[4] == "x" && checked[5] == 'x' && checked[6] == undefined) {
      playwinner(6, tile);
    } else if (checked[4] == "x" && checked[6] == 'x' && checked[5] == undefined) {
      playwinner(5, tile);
    } else if (checked[5] == "x" && checked[6] == 'x' && checked[4] == undefined) {
      playwinner(4, tile);
    } else if (checked[7] == "x" && checked[8] == 'x' && checked[9] == undefined) {
      playwinner(9, tile);
    } else if (checked[8] == "x" && checked[9] == 'x' && checked[7] == undefined) {
      playwinner(7, tile);
    } else if (checked[7] == "x" && checked[9] == 'x' && checked[8] == undefined) {
      playwinner(8, tile);
    } else if (checked[1] == "x" && checked[4] == 'x' && checked[7] == undefined) {
      playwinner(7, tile);
    } else if (checked[1] == "x" && checked[7] == 'x' && checked[4] == undefined) {
      playwinner(4, tile);
    } else if (checked[4] == "x" && checked[7] == 'x' && checked[1] == undefined) {
      playwinner(1, tile);
    } else if (checked[2] == "x" && checked[5] == 'x' && checked[8] == undefined) {
      playwinner(8, tile);
    } else if (checked[2] == "x" && checked[8] == 'x' && checked[5] == undefined) {
      playwinner(5, tile);
    } else if (checked[5] == "x" && checked[8] == 'x' && checked[2] == undefined) {
      playwinner(2, tile);
    } else if (checked[3] == "x" && checked[6] == 'x' && checked[9] == undefined) {
      playwinner(9, tile);
    } else if (checked[3] == "x" && checked[9] == 'x' && checked[6] == undefined) {
      playwinner(6, tile);
    } else if (checked[6] == "x" && checked[9] == 'x' && checked[3] == undefined) {
      playwinner(3, tile);
    } else if (checked[1] == "x" && checked[5] == 'x' && checked[9] == undefined) {
      playwinner(9, tile);
    } else if (checked[1] == "x" && checked[9] == 'x' && checked[5] == undefined) {
      playwinner(5, tile);
    } else if (checked[5] == "x" && checked[9] == 'x' && checked[1] == undefined) {
      playwinner(1, tile);
    } else if (checked[3] == "x" && checked[5] == 'x' && checked[7] == undefined) {
      playwinner(7, tile);
    } else if (checked[3] == "x" && checked[7] == 'x' && checked[5] == undefined) {
      playwinner(5, tile);
    } else if (checked[5] == "x" && checked[7] == 'x' && checked[3] == undefined) {
      playwinner(3, tile);
    } else {
      $(id).text(tile);
      used.splice(used.indexOf(random), 1);
      checked[random] = tile;

    }
  }
  checkwinner();
}

function playwinner(idx, tile) {// play according to the logic.
  var id = "#" + idx;
  $(id).text(tile);
  used.splice(used.indexOf(idx), 1);
  checked[idx] = tile;

}

function checkwinner() {// check to see if anybody won.
  if (!isResult) {

    if (checked[1] == 'x' && checked[2] == 'x' && checked[3] == 'x') showwinner(1, 2, 3);
    else if (checked[4] == 'x' && checked[5] == 'x' && checked[6] == 'x') showwinner(4, 5, 6);
    else if (checked[7] == 'x' && checked[8] == 'x' && checked[9] == 'x') showwinner(7, 8, 9);
    else if (checked[1] == 'x' && checked[4] == 'x' && checked[7] == 'x') showwinner(1, 4, 7);
    else if (checked[2] == 'x' && checked[5] == 'x' && checked[8] == 'x') showwinner(2, 5, 8);
    else if (checked[3] == 'x' && checked[6] == 'x' && checked[9] == 'x') showwinner(3, 6, 9);
    else if (checked[1] == 'x' && checked[5] == 'x' && checked[9] == 'x') showwinner(1, 5, 9);
    else if (checked[3] == 'x' && checked[5] == 'x' && checked[7] == 'x') showwinner(3, 5, 7);
    else if (checked[1] == 'o' && checked[2] == 'o' && checked[3] == 'o') showwinner(1, 2, 3);
    else if (checked[4] == 'o' && checked[5] == 'o' && checked[6] == 'o') showwinner(4, 5, 6);
    else if (checked[7] == 'o' && checked[8] == 'o' && checked[9] == 'o') showwinner(7, 8, 9);
    else if (checked[1] == 'o' && checked[4] == 'o' && checked[7] == 'o') showwinner(1, 4, 7);
    else if (checked[2] == 'o' && checked[5] == 'o' && checked[8] == 'o') showwinner(2, 5, 8);
    else if (checked[3] == 'o' && checked[6] == 'o' && checked[9] == 'o') showwinner(3, 6, 9);
    else if (checked[1] == 'o' && checked[5] == 'o' && checked[9] == 'o') showwinner(1, 5, 9);
    else if (checked[3] == 'o' && checked[5] == 'o' && checked[7] == 'o') showwinner(3, 5, 7);
    else if (used.length === 0) showwinner();

  }
}

function showwinner(x, y, z) {// css to show the winning combination.

  var id1 = "#" + x;
  var id2 = "#" + y;
  var id3 = "#" + z;
  var id = id1 + "," + id2 + "," + id3;
  isResult = true;
  $(id).addClass("winner");

  setTimeout(clear, 1000);

}

function clear() {// clear function to clear the board and start over.

  $("*td").empty();
  used = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  checked = []
  isResult = false;
  $("td").removeClass("winner");
  setTimeout(computerturn(computer), 1000);
}
