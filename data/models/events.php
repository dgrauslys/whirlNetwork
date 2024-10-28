<?php
include '../db/events.php';

class Events {
    // Properties (variables tied to the object)
    public $events = [];

    // Constructor
    public function __construct() {
    }

    // Method (function tied to the object)
    public function loadUpcomingEvents() {
        $db_events = getEvents();
        foreach ($db_events as $event) {
            $events = new Event($event);
            $this->events[] = $event;
        }
    }

    public function loadUpcomingEvent() {
        $db_events = getUpcommingEvents();
        foreach ($db_events as $event) {
            $events = new Event($event);
            $this->events[] = $event;
        }
    }

    public function loadPastEvents() {
        $db_events = getPastEvents();
        foreach ($db_events as $event) {
            $events = new Event($event);
            $this->events[] = $event;
        }
    }

    public function getEvents() {
        return $this->events;
    }

    public function loadEvent($event) {
        $this->events[] = $event;
    }
}

class Event {
    // Properties (variables tied to the object)
    public $id;
    public $name;
    public $image;
    public $date;
    public $time;
    public $location;
    public $description;
    public $fbLink;
    public $meetupLink;
    public $signupLink;
    public $isCanceled;

    // Constructor
    public function __construct($array) {
        $this->id = $array['id'];
        $this->name = $array['name'].' '.$array['name'];
        $this->date = $array['date'];
        $this->time = $array['time'];
        $this->location = $array['location'];
        $this->description = $array['description'];
        $this->fbLink = $array['fb_link'];
        $this->meetupLink = $array['meetup_link'];
        $this->signupLink = $array['signup_link'];
        $this->isCanceled = $array['is_canceled'];
        $this->image = $array['image'];
    }

}

?>