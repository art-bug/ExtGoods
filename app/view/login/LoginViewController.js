Ext.define('ExtGoods.view.login.LoginViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginViewController',

    onLoginClick: function (btn, e, eOpts) {
        var loginView = btn.up('login');
        var loginField = loginView.down('#userName');
        var passwordField = loginView.down('#password');

        if (loginField.value === 'admin' && 
            passwordField.value === 'padmin')
        {
            localStorage.setItem("loggedIn", true);

            this.getView().destroy();

            Ext.create({
                xtype: 'app-main'
            });
        }
        else {
            Ext.MessageBox.show({
                title: 'Ошибка входа',
                message: 'Неверный логин/пароль',
                buttons: Ext.Msg.OK,
                modal: true,
                closable: false
            });
        }
    }
});