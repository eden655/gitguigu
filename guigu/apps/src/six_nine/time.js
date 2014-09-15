KISSY.use("event,node,dom,gallery/calendar-deprecated/1.0/,gallery/calendar-deprecated/1.0/assets/dpl.css",function(S,Event,Node,DOM,Calendar,Calendarstyle){
	var _event = S.Event,
		_anim = S.Anim;

	var time = $('input[role="time"]');

	function showtime(showtime_ID){
			new Calendar(showtime_ID, {
                popup:true,
                closable:true,
                triggerType:['focus']
            }).on('select', function(e) {
                showtime_ID.val(e.date.getFullYear()+"年 "+(e.date.getMonth()+1)+"月 "+e.date.getDate()+"日");
            });
	}

	function forways(data_name,fun_name){
		for(var i = 0;i<data_name.length;i++){
			fun_name(data_name.item(i));
		}
	}

	forways(time,showtime);

});