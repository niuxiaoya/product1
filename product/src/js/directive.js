/**
 * Created by lenovo on 2017/4/27.
 */
var app=angular.module("app")
    .directive("inputFile",function(){
        return{
            restrict:"E",
            template: '<div class="input-file">'+
            '<label for="{{inputId}}"></label>'+
            '<input type="file" id="{{inputId}}">',
            controller:function($scope){
                $scope.inputId='inputFile'+$scope.$id;
            },
            scope:{},
            link:function(scope,ele,attr){
                var inputFile=ele.find("div");
                var input=$(inputFile).find("input");
                input.on("change",function(){
//                            console.log(this.files);
                    var reader=new FileReader();
                    reader.readAsDataURL(this.files[0]);
                    reader.onload=function(){
                        // console.log(reader.result);  //µÃµ½urlµÄ±àÂë
                        $(inputFile).find("label")[0].style.background='url('+this.result+') no-repeat center center';
                    }
                })
            }
        }
    })