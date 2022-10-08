import React from "react";

/**
* @customHooks
* Ketika Anda memiliki logika non visual di dalam sebuah komponen 
* yang ingin diterapkan di banyak komponen, 
* ekstrak logika tersebut menjadi sebuah fungsi hooks, 
* inilah yang disebut custom hooks.
* Gunakan kata "use" didepan nama fungsi
*/ 

function useInput(defaultValue) {
    const [value, setValue] = React.useState(defaultValue);
    const handleValueChange = (event) => { console.log(event.target.value); setValue(event.target.value)};
    return [value, handleValueChange]
}

// function RegisterForm() {
//     const [email, setEmail] = React.useState('');
//     const [password, setPassword] = React.useState('');
//     const [confirmPassword, setConfirmPassword] = React.useState('');
   
//     const handleEmailChange = (event) => setEmail(event.target.value);
//     const handlePasswordChange = (event) => setPassword(event.target.value);
//     const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);
   
//     return (
//       <form>
//         <input value={email} onChange={handleEmailChange} /> <br />
//         <input value={password} onChange={handlePasswordChange} /> <br />
//         <input value={confirmPassword} onChange={handleConfirmPasswordChange} />
//       </form>
//     );
// }

function RegisterForm() {
    const [email, handleEmailChange] = useInput('');
    const [password, handlePasswordChange] = useInput('');
    const [confirmPassword, handleConfirmPasswordChange] = useInput('');
   
    return (
      <form>
        <input value={email} onChange={handleEmailChange} /> <br />
        <input value={password} onChange={handlePasswordChange} /> <br />
        <input value={confirmPassword} onChange={handleConfirmPasswordChange} />
      </form>
    );
}

export default RegisterForm;