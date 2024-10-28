<?php

class Response {
    // Properties (variables tied to the object)
    public $status = true;
    public $code = 200;
    public $errors = [];
    public $data = [];

    // Constructor
    public function __construct() {
    }

    // Method (function tied to the object)
    public function getStatus() {
        return $this->status;
    }

    public function getCode() {
        return $this->code;
    }

    public function getErrors() {
        return $this->errors;
    }

    public function setStatus($given) {
        $this->status = $given;
    }

    public function addErrorMessage($msg) {
        $this->errors[] = $msg;
    }

    public function setData($given) {
        $this->data = $given;
    }

    public function getData() {
        return $this->status ? $this->data : [];
    }
}

?>