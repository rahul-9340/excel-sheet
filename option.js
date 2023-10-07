
let activeElement = document.getElementById("activecell");
let bold = document.getElementById("bold")
let textAlignElements = document.getElementsByClassName("textAlign")
let italic = document.getElementById("italic")
let underline = document.getElementById("underline")
let activecell = null;
let activeOptionState;

function toggleoption(button,isselectd)
{
if(isselectd)
{
button.classList.add("options")
}
else{
  button.classList.remove("options")
}

}



 function HighlightOption(){

toggleoption(bold,activeOptionState.isBoldSelected)
toggleoption(italic,activeOptionState.isItalicSelected)
toggleoption(underline,activeOptionState.isUnderLineSelected)

TextHighlight(activeOptionState.isTexAlignselected)
 }









function onfocus(e){
    activecell= e.target;
    activeElement.innerText = e.target.id;
    selectElement.value = "12"
      
  let computedStyle = getComputedStyle(activecell);

     activeOptionState = {
     isBoldSelected: computedStyle.fontWeight ==="600",
     isItalicSelected: computedStyle.fontStyle ==="italic",
     isUnderLineSelected: computedStyle.textDecoration.includes("underline"),
     isTexAlignselected: computedStyle.textAlign,
     istextColor: computedStyle.color,
     backgroundColor: computedStyle.backgroundColor,
     fontSize:computedStyle.fontSize,
   }

   HighlightOption()

}

function onclickbold(bolds){
    bolds.classList.toggle("options")
 if(activecell)
   {
    if(activeOptionState.isBoldSelected  === false)
    {
        activecell.style.fontWeight = "600";
    }
    else{
        activecell.style.fontWeight = "400";
    }
 activeOptionState.isBoldSelected = !activeOptionState.isBoldSelected;
}

}

function onclickitalic(italic){
italic.classList.toggle("options")

if(activecell)
{
  if(activeOptionState.isItalicSelected===false)
  {
     activecell.style.fontStyle = "italic"
  }
else{
  activecell.style.fontStyle = "normal";
}
}

activeOptionState.isItalicSelected =  !activeOptionState.isItalicSelected;


}

function onclickunderline(underline){
underline.classList.toggle("options")

if(activecell)
{
  if(activeOptionState.isUnderLineSelected===false)
  {
     activecell.style.textDecoration = "underline"
  }
else{
  activecell.style.textDecoration = "none";
}
}

activeOptionState.isUnderLineSelected =  !activeOptionState.isUnderLineSelected;

}

function backgroundcolor(bgcolor){
  bgcolor.classList.toggle("options")

  let selectedbgcolor = bgcolor.value;
if(activecell){
  activecell.style.backgroundColor = selectedbgcolor;
  activeOptionState.backgroundColor = selectedbgcolor;   
}
}

  function textcolor(textcolor){
  textcolor.classList.toggle("options")
  let selectedcolor = textcolor.value;
  if(activecell){
    activecell.style.color = selectedcolor;
    activeOptionState.istextColor = selectedcolor;   
  }
  
  
  }


  function TextHighlight(values){


    for(let i=0; i<textAlignElements.length; i++)
    {
    if(textAlignElements[i].getAttribute("data-value")===values)
    {
      textAlignElements[i].classList.add("options")
    }
    else{
      textAlignElements[i].classList.remove("options")
    }
    }
    }


  function onclicktextalign(text){
    let value = text.getAttribute("data-value")

    TextHighlight(value);
    if(activecell){
        activecell.style.textAlign = value;
        activeOptionState.isTexAlignselected = value;
    }

    }






// Get a reference to the <select> element
const selectElement = document.getElementById('select');

// Add an event listener to the <select> element
selectElement.addEventListener('change', function() {
  // Get the selected value from the <select>
  const selectedValue = selectElement.value;
  
  // Call a function based on the selected value
  switch (selectedValue) {
    case '12':
      on12();
      break;
    case '14':
      on14();
      break;
    case '16':
      on16();
      break;
    case '18':
      on18();
      break;
    case '20':
      on20();
      break;
    default:
      // Handle unknown value or do nothing
      break;
  }
});

// Example functions to handle different font sizes
function on12() {
  
  activecell.style.fontSize = "12px";
}

function on14() {
  activecell.style.fontSize = "14px";
  
}

function on16() {
   
  activecell.style.fontSize = "16px";
}

function on18() {
 
  activecell.style.fontSize = "18px";
  
}

function on20() {
 
  activecell.style.fontSize = "20px";
  
}







   