let button=document.getElementById("customButton");
document.getElementById("applyButton").onclick=
function()
{
    button.style.backgroundColor=document.getElementById("bgColorInput").value;
    button.style.color=document.getElementById("fontColorInput").value;
    button.style.fontSize=document.getElementById("fontSizeInput").value;
    button.style.fontWeight=document.getElementById("fontWeightInput").value;
    button.style.padding=document.getElementById("paddingInput").value;
    button.style.borderRadius=document.getElementById("borderRadiusInput").value;
};
