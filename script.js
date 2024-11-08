function cal(){

    let a=document.getElementById("txt1").value;
    let b=document.getElementById("txt2").value;
    let c=document.getElementById("ope").value;
   
    if(c== '+')
    {
        // let res=convert.ToInt32(a) + convert.ToInt32(b);
        let res=parseInt (a)+ parseInt(b);
        document.getElementById("txt3").value=res;
       
    }

    if(c== '-')
        {
            // let res=convert.ToInt32(a) + convert.ToInt32(b);
            let res=parseInt (a)- parseInt(b);
            document.getElementById("txt3").value=res;
        }

        if(c== '*')
            {
                // let res=convert.ToInt32(a) + convert.ToInt32(b);
                let res=parseInt (a) * parseInt(b);
                document.getElementById("txt3").value=res;
            }

            if(c== '/')
                {
                    // let res=convert.ToInt32(a) + convert.ToInt32(b);
                    let res=parseInt (a) / parseInt(b);
                    document.getElementById("txt3").value=res;
                }

       
}