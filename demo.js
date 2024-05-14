const form =document.getElementById('generate-form');
const qr =document.getElementById('qrcode');

const onGenerateSubmit=(e)=>{
    e.preventDefault();    //preventDefault will prevent the default behaviour i.e form submission

    clearUI();

    const url=document.getElementById('url').value;
    const size=document.getElementById('size').value;

    // console.log(url,size);
    
    if(url==''){
        alert("Please Enter a URL");
    }else{
        showSpinner();

        setTimeout(()=>{
            hideSpinner();

            generateQRCode(url,size);
        },1000);
    }

};


const generateQRCode = (url,size)=>{            //here we are using the qrcodejs to create the actual qrcode
    const qrcode= new QRcode("qrcode",{
        text:url,
        width:size,
        height:size,


    });
};

const showSpinner = ()=>{
    document.getElementById('spinner').style.display='block';    // here we are showing the spinner
}

const hideSpinner = ()=>{
    document.getElementById('spinner').style.display='none';    // here we are hiding the spinner
}

const clearUI=()=>{
    qr.innerHTML='';
}

hideSpinner();


form.addEventListener('submit',onGenerateSubmit);
