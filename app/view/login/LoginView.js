
Ext.define('ExtGoods.view.login.LoginView',{
    extend: 'Ext.window.Window',
    xtype: 'login',

    controller: 'loginViewController',

    title: 'Вход',

    closable: false,

    autoShow: true,

    resizable: false,

    flex: 1,

    width: '180pt',

    items: {
        xtype: 'form',
        bodyPadding: 10,
        items: [
            {
                xtype: 'textfield',
                id: 'userName',
                emptyText: 'Логин',
                height: 40,
                anchor: '100%',
                blankText: 'Поле не заполнено',
                allowBlank: false
            }, {
                xtype: 'textfield',
                id: 'password',
                inputType: 'password',
                emptyText: 'Пароль',
                height: 40,
                anchor: '100%',
                blankText: 'Поле не заполнено',
                allowBlank: false
            }
        ],
        buttons: [
            {
                text: 'Войти',
                formBind: true,
                flex: 1,
                listeners: {
                    click: 'onLoginClick'
                }
            }
        ]
    }
});
