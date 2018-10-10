Ext.define('ExtGoods.view.card.CardViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.cardViewController',

    getTabPanel: function () {
        return Ext.ComponentQuery.query('tabpanel')[0];
    },

    getActiveTab: function () {
        return this.getTabPanel().getActiveTab();
    },

    getGoodsGridStore: function (tab) {
        return tab.down('goodsGrid').getStore();
    },
    
    onSaveClick: function (btn) {
        var activeTab = this.getActiveTab();
        var store = this.getGoodsGridStore(activeTab);
        var priceField = btn.up('cardView').down('numberfield[cls="price"]');
        var quantityField = btn.up('cardView').down('numberfield[cls="quantity"]');

        if (store.needsSync &&
            priceField.isValid() &&
            quantityField.isValid())
        {
            Ext.MessageBox.show({
                title: 'Наличие измененных данных',
                message: 'Исходные данные изменены',
                buttons: Ext.Msg.OK,
                modal: true,
                closable: false
            });

            store.commitChanges();
            store.sync();

            var tabs = this.getTabPanel().items.items;
            var activeTabIdx = this.getTabPanel().items.indexOf(activeTab);

            if (tabs.length > 1) {
                for (var tabIndex = 0; tabIndex < tabs.length; tabIndex++) {
                    if (tabIndex !== activeTabIdx) {
                        this.getGoodsGridStore(tabs[tabIndex]).reload();
                    }
                }
            }
        }
    },

    onCancelClick: function (btn) {
        var activeTab = this.getActiveTab();
        var store = this.getGoodsGridStore(activeTab);

        store.rejectChanges();
        btn.up('cardView').up().close();
    }
});