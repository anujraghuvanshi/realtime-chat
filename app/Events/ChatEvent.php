<?php

namespace App\Events;

use App\Models\user;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ChatEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;


    public $message;

    public $user;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($message, User $user)
    {
        //
        return $this->user = $user;
        return $this->message = $message;
    } 

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('chat');
    }
}
