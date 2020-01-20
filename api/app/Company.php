<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    /**
     * Get companies subject for maintenance.
     */
    public function parentable()
    {
        return $this->morphTo();
    }

    /**
     * Get jobs per company.
     */
    public function parentable_jobs()
    {
        return $this->morphTo();
    }

    /**
     * Get all issues per property/company.
     */
    public function issuesToBeFixed()
    {
        return $this->morphMany('App\Issue', 'parentable');
    }

    /**
     * Get all issues per property/company.
     */
    /* public function issues()
    {
        return $this->belongsTo('App\Issue', 'id');
    } */
}
