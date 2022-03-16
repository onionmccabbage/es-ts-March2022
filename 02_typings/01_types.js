// enums
{
    // we can declare an enumerable collection
    var BoxSize = void 0;
    (function (BoxSize) {
        BoxSize[BoxSize["Small"] = 0] = "Small";
        BoxSize[BoxSize["Medium"] = 1] = "Medium";
    })(BoxSize || (BoxSize = {}));
    // enums are open ended...
    (function (BoxSize) {
        BoxSize[BoxSize["Large"] = 2] = "Large";
        BoxSize[BoxSize["XLarge"] = 3] = "XLarge";
        BoxSize[BoxSize["XXLarge"] = 4] = "XXLarge";
    })(BoxSize || (BoxSize = {}));
    // use our enum
    var boxType = BoxSize.Small;
    var boxtypeName = BoxSize[boxType]; //its a small box
    var size = BoxSize.Small;
    size++; // we can increment
    size++; // we can increment
    size++; // we can increment
    size++; // we can increment
    size++; // beyond the enum
    console.log(BoxSize[size]);
}
