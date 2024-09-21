document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // 阻止默认行为

    //var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // 使用 fetch 发送 POST 请求
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Origin': window.location.origin
        },
        body: JSON.stringify({
            service_id: 'service_tpa6zkq', // 替换为你的服务 ID
            template_id: 'template_tehw9nw', // 替换为你的模板 ID
            user_id: 'vJ5qqMG0U8KPPLIRJ', // 替换为你的 User ID
            template_params: {
                //from_name: name,
                from_name: email,
                message: message
            }
        })
    })
    .then(response => {
        if (response.status === 200) {
        } else {
            throw new Error('Failed to send email. Status: ' + response.status);
        }
    })
    .catch(error => {
        alert('Error: ' + error.message);
    });
});