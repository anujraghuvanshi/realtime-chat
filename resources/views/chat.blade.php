<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>Let's Chat</title>
	<link rel="stylesheet" href="{{ asset('css/app.css') }}">

	<style>
		.message-container {
			margin-top: 100px
		;}
		.list-group {
			height: 270px;
			overflow-y: scroll;
		}
		.message-list-item{
			padding: 3px 15px;
		}
	</style>

</head>
<body>
	{{-- Body Section --}}
	
	<div class="container message-container">
		<div class="row" id="app">
			<div class="offset-2 col-8">
				<li class="list-group-item active">Let's Chat 
					<span class="badge badge-pill badge-danger"> @{{activeUsers}} online</span>
				</li>
				<span class="badge badge-pill badge-primary" v-if="typing != ''"> @{{ typing }}</span>
				<ul class="list-group" v-chat-scroll>
					<message v-for="message, index in chat.messages"
						:key=message.index
						:color=chat.color[index]
						:user=chat.user[index]
						:time=chat.time[index]>
						@{{message}}
					</message>
					<input type="text" v-model="message" @keyup.enter="sendMessgae" class="form-control" placeholder="Type Your message here...">
				</ul>
			</div>
		</div>
	</div>

	<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>