/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ExtGoods.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainViewController',

    onGoodsClick: function (btn) {
        var tabPanel = btn.up('viewport').down('tabpanel');
        tabPanel.add({
            xtype: 'panel',
            title: 'Товары',
            bodyPadding: 20,
            closable: true,
            items: {
                xtype: 'goodsGrid'
            }
        });

        var lastTab = tabPanel.items.length - 1;
        tabPanel.setActiveTab(lastTab);
    },

    onExitClick: function () {
        localStorage.removeItem('loggedIn');

        this.getView().destroy();

        Ext.create({
            xtype: 'login'
        });
    }
});