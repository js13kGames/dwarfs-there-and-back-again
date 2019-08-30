"use strict";
/// <reference path="dwarfs.d.ts" />
const SCREEN_WIDTH = 464;
const SCREEN_HEIGHT = 125;
const PAL_FORTRESS = ['7c3f58', 'eb6b6f', 'f9a875', 'fff6d3'];
const PAL_FOREST = ['4c625a', '7b9278', 'abc396', 'dbf4b4'];
const PAL_TREASURE = ['2b2b26', '706b66', 'a89f94', 'e0dbcd'];
const B_SCALE = 4;
const B_DWARF = [
    0b1001010101010110,
    0b0111111111111101,
    0b0111111111111101,
    0b0111011111011101,
    0b0011111111111100,
    0b0000000000000000,
    0b0000110101110000,
    0b0000000000000000,
    0b1000000000000010,
    0b1010100000001010,
    0b1010101000001010,
]; // opacity is 0b10
