/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtGoods.view.main.MainView', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.window.MessageBox',
        'ExtGoods.view.goodsGrid.GoodsGridView',
        'ExtGoods.view.card.CardView'
    ],

    controller: 'mainViewController',
    
    viewModel: {
        type: 'mainViewModel'
    },

    items: [
        {
            xtype: 'panel',
            title: {
                text: 'Учет товаров',
                height: '60px',
                style: {
                    fontSize: '28px',
                    fontWeight: 'bold',
                    paddingLeft: '22px'
                }
            },
            header: {
                height: 120,
                items: [
                    {
                        xtype: 'button',
                        text: 'Товары',
                        width: '75pt',
                        height: '46pt',
                        handler: 'onGoodsClick'
                    }, {
                        xtype: 'tbspacer',
                        width: '4px'
                    }, {
                        xtype: 'button',
                        text: 'Выход',
                        width: '65pt',
                        height: '46pt',
                        handler: 'onExitClick'
                    }, {
                        xtype: 'tbspacer',
                        flex: 4
                    }
                ]
            }
        }, {
            xtype: 'tabpanel',
            tabBarHeaderPosition: 0,
            cls: 'goodsTabPanel',
            tabBar: {
                defaults: {
                    style: {
                        paddingLeft: '22px'
                    },
                    width: 96,
                    height: 50
                }
            },
            listeners: {
                tabchange: function (tabPanel) {
                    // debugger
                    // for (var tabIndex = 0; tabIndex < tabPanel.items.items.length; ++tabIndex) { 
                    //     tabPanel.items.items[tabIndex].update();
                    // }
                    // tabPanel.getUpdater();
                }
            },
            items: [
                {
                    xtype: 'panel',
                    title: 'Товары',
                    bodyPadding: 20,
                    items: {
                        xtype: 'goodsGrid'
                    }
                }
            ]
        }
    ]
});
