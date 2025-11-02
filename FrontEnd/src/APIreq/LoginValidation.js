function LoginValidation(params) {


    // let user = "123hshs555";
    // console.log(user.match(a - z, A - Z));

    async function validateUser() {

        let response = await fetch('https://mocki.io/v1/0535e487-7371-4fac-99a2-63791dbaed3f');
        let result = await response.json();
        console.log(result);
    }

    return (
        <>
            <div></div>
        </>
    )
}

export default LoginValidation;