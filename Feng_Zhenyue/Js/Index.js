
			//鼠标移入移除动画
			var p3ul=document.getElementsByClassName('p3ulli');
			  // 鼠标移入事件
			
			  p3ul.onmouseover=function(){
			alert("success");
			    this.style.color='red';
			
			    this.style.fontWeight='550';
			
			  };
			
			  // 鼠标移出事件
			
			  p3ul.onmouseout=function(){
			
			    this.style.color='#545C63';
			
			    this.style.fontWeight='400';
			
			  };
			//轮播图left注入
		$(function() {
			$.ajax({
				url: "../Json/swiperExpend.json",
				type: "get",
				dataType: "json",
				// dataType:'JSONP',
				// error: function() {
				// 	alert("ppp");
				// },
				error: function() {
					alert("error");
				},
				success: function(data) {
					// alert("leftsucess3");
					var str = "";
					$.each(data, function(index, dataItem) {
						str +=
							// 这里写导入部分的代码
							`<div class="item">
								<a href="#">
									<sapn class="spanop">${dataItem.span} </span>
										<div class="tanchu" style="${dataItem.top}">
											<div class="tanchu1">
												<div class="tanchu11">
													<h4>${dataItem.h4}</h4>
												</div>
												<div class="tanchu12">
													${dataItem.tanchu12}
												</div>
											</div>
											<div class="tanchu2">
												<div class="tanchu21">
													<div style="background-image:url({dataItem.tanchu2.tanchu21_img};">

													</div>
													<div class="tanchu21miaoshu">
														<div class="tanchu21miaoshuName">
															${dataItem.tanchu21miaoshu_name}
														</div>
														<div class="tanchu21miaoshupri">
															${dataItem.tanchu2.tanchu21miaoshu_pri}
														</div>
													</div>
												</div>
												<div class="tanchu21">
													<div style="background-image:url({dataItem.tanchu2.tanchu21_img};">

													</div>
													<div class="tanchu21miaoshu">
														<div class="tanchu21miaoshuName">
															${dataItem.tanchu2.tanchu21miaoshu_name}
														</div>
														<div class="tanchu21miaoshupri">
															${dataItem.tanchu2.tanchu21miaoshu_pri}
														</div>
													</div>
												</div>
												<div class="tanchu21">
													<div style="background-image:url({dataItem.tanchu2.tanchu21_img};">

													</div>
													<div class="tanchu21miaoshu">
														<div class="tanchu21miaoshuName">
															${dataItem.tanchu2.tanchu21miaoshu_name}
														</div>
														<div class="tanchu21miaoshupri">
															${dataItem.tanchu2.tanchu21miaoshu_pri}
														</div>
													</div>
												</div>
												<div class="tanchu21">
													<div style="background-image:url({dataItem.tanchu2.tanchu21_img};">

													</div>
													<div class="tanchu21miaoshu">
														<div class="tanchu21miaoshuName">
															${dataItem.tanchu2.tanchu21miaoshu_name}
														</div>
														<div class="tanchu21miaoshupri">
															${dataItem.tanchu2.tanchu21miaoshu_pri}
														</div>
													</div>
												</div>
											</div>
										</div>
								</a>

							</div>`;
					});
					//类选择器
					$("#lunboleftfix").append(str);
				}
			})
		})
		// page2zhuru
		$(function() {
			$.ajax({
				url: "../Json/haoke.json",
				type: "get",
				dataType: "json",
				// dataType:'JSONP',
				// error: function() {
				// 	alert("ppp");
				// },
				error: function() {
					console.log("error");
				},
				success: function(data) {
					// alert("sucess3");
					var str = "";
					$.each(data, function(index, dataItem) {
						str +=
							// 这里写导入部分的代码
							`<div class="haokecard">
				   	<div class="haoketit">
				   	</div>
				   	<div class="haokeimg" style="background-image: url(${dataItem.img});">
				   	</div>
				   	<div class="haokemiaoshu">
				   		<a class="onred">${dataItem.miaoshu}</a>
				   	</div>
				   	<div class="haokemo">
				   		<span>${dataItem.level}</span>
				   		<span class="pingjia">${dataItem.comments}</span>
				   		<span class="haokemo_price">${dataItem.price}</span>
				   	</div>
				   </div>
				   </div>`;
					});
					//类选择器
					$("#page2fix").append(str);
				}
			})
		})
		// page3注入
		$(function() {
			$.ajax({
				url: "../Json/learnWay.json",
				type: "get",
				dataType: "json",
				// dataType:'JSONP',
				// error: function() {
				// 	alert("success");
				// },
				error: function() {
					console.log("error");
				},
				success: function(data) {
					// alert("sucess3");
					var str = "";
					$.each(data, function(index, dataItem) {
						// alert("sucess4");
						str +=
							// 这里写导入部分的代码
							`<div class="p3xiao">
							<a class="p3kongzhi">
								<div class="p3banner" style="${dataItem.img}">
								</div>
								<h4>
									${dataItem.h4}
								</h4>
								<p>
									${dataItem.p}
								</p>
								<div class="p3ifo">
									<span>${dataItem.p3ifo_step}</span>
									<span>${dataItem.p3ifo_shoucang}</span>
								</div>
							</a>
						</div>`;
					});
					//类选择器
					$("#page3fix").append(str);
				}
			})
		})
		// page4注入
		$(function() {
			$.ajax({
				url: "../Json/popularCourse.json",
				type: "get",
				dataType: "json",
				// dataType:'JSONP',
				// error: function() {
				// 	alert("ppp");
				// },
				error: function() {
					console.log("error");
				},
				success: function(data) {
					// alert("sucess3");
					var str = "";
					$.each(data, function(index, dataItem) {
						str +=
							// 这里写导入部分的代码
							`<div class="haokecard">
						<div class="haoketit">
						</div>
						<div class="haokeimg" style="background-image: url(${dataItem.img});">
						</div>
						<div class="haokemiaoshu">
							<a class="onred">${dataItem.miaoshu}</a>
						</div>
						<div class="haokemo">
							<span></span>
							<sapn class="pingjia">${dataItem.comments}</span>
						</div>
					</div>`;
					});
					//类选择器
					$("#page4fix").append(str);
				}
			})
		})
		// page5注入
		$(function() {
			$.ajax({
				url: "../Json/zhuanlan.json",
				type: "get",
				dataType: "json",
				// dataType:'JSONP',
				// error: function() {
				// 	alert("ppp");
				// },
				error: function() {
					console.log("error");
				},
				success: function(data) {
					// alert("sucess3");
					var str = "";
					$.each(data, function(index, dataItem) {
						console.log(dataItem.course_read_info);
						str +=
							// 这里写导入部分的代码
							`<div class="p5xiaohezi">
								<div class="course_banner">
									<a>
										<img src="${dataItem.img}">
										<div class="try_read_me">${dataItem.shidu}</div>
									</a>
								</div>
								<h4>
									<a href="#" style="outline: none;text-decoration: none;">${dataItem.decoration}</a>
								</h4>
								<div class="course_read_info">
								<span>${dataItem.course_read_info}</span>
								</div>
								<div class="course_read_teacher">
									<a href="#" style="text-decoration: none;">
										<span>${dataItem.couser_read_teacher}</span>
										/
										<span>${dataItem.couser_read_teacher_decripition}</span>
										</a>
								</div>
								<div class="course_read_price">
									<a class="course_card_price">
										<span class="sale">${dataItem.course_card_price_sale}</span>
										<span class="ori">${dataItem.course_card_price_ori}</span>
										<div class="cutdown" style="clear: both;">
										<span class="name">${dataItem.name}</span>
									</a>
								</div>
							</div>
						</div>`;
					});
					//类选择器
					$("#page5fix").append(str);
				}
			})
		});
