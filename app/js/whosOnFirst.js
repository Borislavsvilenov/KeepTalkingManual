const word_location = {'yes': 'midleft', 'first': 'topright', 'display': 'bottomright', 'okay': 'topright', 'says': 'bottomright', 'nothing': 'midleft', 'empty': 'bottomleft', 'blank': 'midright', 'no': 'bottomright', 'led': 'midleft', 'lead': 'bottomright', 'read': 'midright', 'red': 'midright', 'reed': 'bottomleft', 'leed': 'bottomleft', 'holdon': 'bottomright', 'you': 'midright', 'youare': 'bottomright', 'your': 'midright', 'youre': 'midright', 'ur': 'topleft', 'there': 'bottomright', 'theyre': 'bottomleft', 'their': 'midright', 'theyare': 'midleft', 'see': 'midright', 'c': 'topright', 'cee': 'bottomleft'
};

const wordList = {
  'ready': 'YES, OKAY, WHAT, MIDDLE, LEFT, PRESS, RIGHT, BLANK, READY, NO, FIRST, UHHH, NOTHING, WAIT',
  'first': 'LEFT, OKAY, YES, MIDDLE, NO, RIGHT, NOTHING, UHHH, WAIT, READY, BLANK, WHAT, PRESS, FIRST',
  'no': 'BLANK, UHHH, WAIT, FIRST, WHAT, READY, RIGHT, YES, NOTHING, LEFT, PRESS, OKAY, NO, MIDDLE',
  'blank': 'WAIT, RIGHT, OKAY, MIDDLE, BLANK, PRESS, READY, NOTHING, NO, WHAT, LEFT, UHHH, YES, FIRST',
  'nothing': 'UHHH, RIGHT, OKAY, MIDDLE, YES, BLANK, NO, PRESS, LEFT, WHAT, WAIT, FIRST, NOTHING, READY',
  'yes': 'OKAY, RIGHT, UHHH, MIDDLE, FIRST, WHAT, PRESS, READY, NOTHING, YES, LEFT, BLANK, NO, WAIT',
  'what': 'UHHH, WHAT, LEFT, NOTHING, READY, BLANK, MIDDLE, NO, OKAY, FIRST, WAIT, YES, PRESS, RIGHT',
  'uhhh': 'READY, NOTHING, LEFT, WHAT, OKAY, YES, RIGHT, NO, PRESS, BLANK, UHHH, MIDDLE, WAIT, FIRST',
  'left': 'RIGHT, LEFT, FIRST, NO, MIDDLE, YES, BLANK, WHAT, UHHH, WAIT, PRESS, READY, OKAY, NOTHING',
  'right': 'YES, NOTHING, READY, PRESS, NO, WAIT, WHAT, RIGHT, MIDDLE, LEFT, UHHH, BLANK, OKAY, FIRST',
  'middle': 'BLANK, READY, OKAY, WHAT, NOTHING, PRESS, NO, WAIT, LEFT, MIDDLE, RIGHT, FIRST, UHHH, YES',
  'okay': 'MIDDLE, NO, FIRST, YES, UHHH, NOTHING, WAIT, OKAY, LEFT, READY, BLANK, PRESS, WHAT, RIGHT',
  'wait': 'UHHH, NO, BLANK, OKAY, YES, LEFT, FIRST, PRESS, WHAT, WAIT, NOTHING, READY, RIGHT, MIDDLE',
  'press': 'RIGHT, MIDDLE, YES, READY, PRESS, OKAY, NOTHING, UHHH, BLANK, LEFT, FIRST, WHAT, NO, WAIT'
  'you': 'SURE, YOU ARE, YOUR, YOURE, NEXT, UH HUH, UR, HOLD, WHAT?, YOU, UH UH, LIKE, DONE, U',
  'youare': 'YOUR, NEXT, LIKE, UH HUH, WHAT?, DONE, UH UH, HOLD, YOU, U, YOURE, SURE, UR, YOU ARE',
  'your': 'UH UH, YOU ARE, UH HUH, YOUR, NEXT, UR, SURE, U, YOURE, YOU, WHAT?, HOLD, LIKE, DONE',
  'youre': 'YOU, YOURE, UR, NEXT, UH UH, YOU ARE, U, YOUR, WHAT?, UH HUH, SURE, DONE, LIKE, HOLD',
  'ur': 'DONE, U, UR, UH HUH, WHAT?, SURE, YOUR, HOLD, YOURE, LIKE, NEXT, UH UH, YOU ARE, YOU',
  'u': 'UH HUH, SURE, NEXT, WHAT?, YOURE, UR, UH UH, DONE, U, YOU, LIKE, HOLD, YOU ARE, YOUR',
  'uhhuh': 'UH HUH, YOUR, YOU ARE, YOU, DONE, HOLD, UH UH, NEXT, SURE, LIKE, YOURE, UR, U, WHAT?',
  'uhuh': 'UR, U, YOU ARE, YOURE, NEXT, UH UH, DONE, YOU, UH HUH, LIKE, YOUR, SURE, HOLD, WHAT?',
  'what?': 'YOU, HOLD, YOURE, YOUR, U, DONE, UH UH, LIKE, YOU ARE, UH HUH, UR, NEXT, WHAT?, SURE',
  'done': 'SURE, UH HUH, NEXT, WHAT?, YOUR, UR, YOURE, HOLD, LIKE, YOU, U, YOU ARE, UH UH, DONE',
  'next': 'WHAT?, UH HUH, UH UH, YOUR, HOLD, SURE, NEXT, LIKE, DONE, YOU ARE, UR, YOURE, U, YOU',
  'hold': 'YOU ARE, U, DONE, UH UH, YOU, UR, SURE, WHAT?, YOURE, NEXT, HOLD, UH HUH, YOUR, LIKE',
  'sure': 'YOU ARE, DONE, LIKE, YOURE, YOU, HOLD, UH HUH, UR, SURE, U, WHAT?, NEXT, YOUR, UH UH',
  'like': 'YOURE, NEXT, U, UR, HOLD, DONE, UH UH, WHAT?, UH HUH, YOU, LIKE, SURE, YOU ARE, YOUR'
};


function getWordLocation(word)
{
    return word_location[word];
}

function getList(word)
{
    return wordList[word];
}

