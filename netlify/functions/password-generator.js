exports.handler = async function(event, context) {
    // Your password generation logic here
    const password = generatePassword();  // Example password generation logic
    
    return {
        statusCode: 200,
        body: JSON.stringify({ password })
    };
};

function generatePassword() {
    // Simple password generation logic (you can improve this)
    return Math.random().toString(36).slice(-8);
}
