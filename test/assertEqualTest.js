const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(" ", "");
assertEqual(" ", "  ");
assertEqual(1, "1");
assertEqual(null, undefined);
assertEqual(null, "");
assertEqual(0, null);
assertEqual(undefined, "");
assertEqual(undefined, 0);
assertEqual([], null);
assertEqual(true, 1);