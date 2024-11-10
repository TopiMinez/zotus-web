gdjs.ShopCode = {};
gdjs.ShopCode.localVariables = [];
gdjs.ShopCode.GDIDTextObjects1= [];
gdjs.ShopCode.GDIDTextObjects2= [];
gdjs.ShopCode.GDGolder_9595KingObjects1= [];
gdjs.ShopCode.GDGolder_9595KingObjects2= [];
gdjs.ShopCode.GDMarksObjects1= [];
gdjs.ShopCode.GDMarksObjects2= [];


gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDMarksObjects1Objects = Hashtable.newFrom({"Marks": gdjs.ShopCode.GDMarksObjects1});
gdjs.ShopCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Golder_King"), gdjs.ShopCode.GDGolder_9595KingObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDGolder_9595KingObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDGolder_9595KingObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + " МОН");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Marks"), gdjs.ShopCode.GDMarksObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDMarksObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Save", "MON", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("IDText"), gdjs.ShopCode.GDIDTextObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDIDTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDIDTextObjects1[i].getBehavior("Text").setText("UID: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDIDTextObjects1.length = 0;
gdjs.ShopCode.GDIDTextObjects2.length = 0;
gdjs.ShopCode.GDGolder_9595KingObjects1.length = 0;
gdjs.ShopCode.GDGolder_9595KingObjects2.length = 0;
gdjs.ShopCode.GDMarksObjects1.length = 0;
gdjs.ShopCode.GDMarksObjects2.length = 0;

gdjs.ShopCode.eventsList0(runtimeScene);
gdjs.ShopCode.GDIDTextObjects1.length = 0;
gdjs.ShopCode.GDIDTextObjects2.length = 0;
gdjs.ShopCode.GDGolder_9595KingObjects1.length = 0;
gdjs.ShopCode.GDGolder_9595KingObjects2.length = 0;
gdjs.ShopCode.GDMarksObjects1.length = 0;
gdjs.ShopCode.GDMarksObjects2.length = 0;


return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
