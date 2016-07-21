(function(){


    "use strict";
    //以下代码遵循阉割过模式,如果出现不规则的代码 就报错
    //建议写代码时 注意规范
    var todos=[];
    var app=Backbone.View.extend({
        el: '#main',
        events: {
            'click #addTodo': 'addTodo',//为id为addTodo的标签绑定一个click事件,当点击的时候调用addTodo方法
            'longTap li': 'removeTodo'//为li标签添加longTap事件,当长安的时候触发removeTodo方法
        },
        template:_.template($('#todoTemplate').html()),//获取模板的内容
        addTodo:function(){//当Id为addTodo的标签点击时候触发
            //console.log(el);
            //var item=$("#todoVal");
            var item = $(this.el).find('#todaVal');
            var val=item.val();
            if(val.length<2) return;

            todos.push(val);
            item.val('');
            $("#todoList").append(this.template({title:val}));
            //把模板渲染后的html代码扩展在页面中的id为todoList的容器中
        },
        removeTodo:function(e){
            var item=$(e.target);
            todos.splice(todos.indexOf(item.html()),1);
            $(item).remove();//删除标签
        },
        initialize:function(){
        }
    });

    $.afui.ready(function(){
        new app();
    });
})(jQuery);