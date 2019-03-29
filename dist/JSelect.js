//Webpack
//export function (elSelector){}
let JSelect = function (elSelector) {
        let element = document.querySelectorAll(elSelector);

        if (!element || typeof element !== 'object') {
            throw "Error,Element Not Found!"
        }

        element.forEach(element => {
            let newEl = document.createElement('div');
            newEl.classList.add('jack-select');
            newEl.innerHTML = '<div class="jack-select-container"><input class="jack-select-input" type="text" value="" readonly><i class="jack-select-icon"></i></div><ul class="jack-select-options"></ul>'
            element.parentElement.insertBefore(newEl, element)
            element.style.display="none";
        });

        let initData = () => {
            element.forEach((element, index) => {
                let ul = document.querySelectorAll('.jack-select-options')[index];
                //定义监听
                Object.defineProperty(element,'onchange',{
                    set:function(fun){
                        ul.onchange=fun;
                    }
                })
                Object.defineProperty(element,'_value',{
                    set:function(val){
                        this.value=val
                        ul.value=val;
                        ul.querySelectorAll("li").forEach(e=>{
                            if(e.getAttribute("data")==val){
                                document.querySelectorAll('.jack-select-input')[index].value=e.innerHTML
                            }
                        })
                    },
                    get:function(){
                        return this.value
                    }
                })



                let options = element.options;
                let html = '';
                for (let i = 0; i < options.length; i++) {
                    if(options[i].disabled){
                        html += '<li class="jack-select-option-disabled" data="' + options[i].value + '">' + options[i].innerHTML + '</li>';
                    }else{
                        html += '<li class="jack-select-option" data="' + options[i].value + '">' + options[i].innerHTML + '</li>';
                    }
                    if (options[i].selected) {
                        document.querySelectorAll(".jack-select-container .jack-select-input")[index].value = options[i].innerHTML
                    }
                }
                ul.innerHTML = html;

                element.addEventListener('change', (e) => {
                    document.querySelectorAll(".jack-select-container .jack-select-input")[index].value = e.target.selectedOptions[0].innerHTML
                });

                document.querySelectorAll(".jack-select-container")[index].addEventListener('click', () => {
                    let el = document.querySelectorAll(".jack-select-icon")[index];
                    if (el.classList.contains('jack-select-rotate')) {
                        el.classList.remove('jack-select-rotate');
                        document.querySelectorAll('.jack-select-options')[index].classList.remove('jack-select-scale');
                    } else {
                        document.querySelectorAll('.jack-select-options')[index].classList.add('jack-select-scale');
                        el.classList.add('jack-select-rotate');
                    }
                });

                document.querySelectorAll('.jack-select-input')[index].addEventListener('blur', () => {
                    setTimeout(() => {
                        document.querySelectorAll('.jack-select-options')[index].classList.remove('jack-select-scale');
                        document.querySelectorAll(".jack-select-icon")[index].classList.remove('jack-select-rotate')
                    }, 167);
                });

                document.querySelectorAll(".jack-select-options")[index].querySelectorAll('.jack-select-option').forEach(e => {
                    e.addEventListener('click', e => {
                        //给输入框赋值
                        let el = document.querySelectorAll(".jack-select-container .jack-select-input")[index];
                        el.value = e.target.innerHTML;

                        //判断属性
                        if(ul.value !== e.target.getAttribute('data')){
                            element._value=e.target.getAttribute('data');
                            ul.onchange===null?"":ul.onchange(e.target.getAttribute('data'),e.target.innerHTML)
                        }
                    })
                })
            })
        };

        initData();

        return {
            render() {
                initData()
            }
        }

    };
