function check_password()
{
    const search_params = new URLSearchParams(window.location.search);
    const password = search_params.get("password");

    var redirect = "login.html";

    if (password.length <= 0 || password === null)
    {
        window.location.href = redirect;
        return;
    }

    if (password.length >= 8)
    {
        var upper = 0;
        var digit = 0;
        var special = 0;

        for (var i = 0; i < password.length; i++)
        {
            var ch = password.charCodeAt(i);
            
            if (ch >= 0x41 && ch <= 0x5A)
                upper++;

            if (ch >= 0x30 && ch <= 0x39)
                digit++;
            
            if (ch < 0x30
            || (ch >= 0x3A && ch <= 0x40) 
            || (ch >= 0x5B && ch <= 0x60)
            || ch >= 0x7B)
            {
                special++;
            }
        }

        if (upper == 2 && digit == 1 && special == 1)
            redirect = "main.html";
    }

    window.location.href = redirect;
}
