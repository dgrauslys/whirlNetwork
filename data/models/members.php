<?php
include '../db/members.php';

class Members {
    // Properties (variables tied to the object)
    public $members = [];

    // Constructor
    public function __construct() {
    }

    // Method (function tied to the object)
    public function loadLeadership() {
        $db_members = getLeadership();
        foreach ($db_members as $member) {
            $member = new Member($member);
            $this->members[] = $member;
        }
    }

    public function loadAllMembers() {
        $db_members = getAllMembers();
        foreach ($db_members as $member) {
            $member = new Member($member);
            $this->members[] = $member;
        }
    }

    public function getMembers() {
        return $this->members;
    }

    public function loadMember($member) {
        $this->members[] = $member;
    }
}

class Member {
    // Properties (variables tied to the object)
    public $id;
    public $name;
    public $firstName;
    public $lastName;
    public $isLeadership;
    public $isActive;
    public $imageUrl;
    public $shortCopy;
    public $tags;

    // Constructor
    public function __construct($array) {
        $this->id = $array['id'];
        $this->name = $array['first_name'].' '.$array['last_name'];
        $this->firstName = $array['first_name'];
        $this->lastName = $array['last_name'];
        $this->isLeadership = $array['is_leadership'];
        $this->isActive = $array['is_active'];
        $this->imageUrl = $array['image'];
        $this->shortCopy = $array['short_copy'];
        $this->tags = $array['tags'];
    }

}

?>