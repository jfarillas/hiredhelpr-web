<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Company;

class Job extends Model
{
    /**
     * Cast the option key element for some fields (ie. service types)
     *
     * @var array
     */
    protected $casts = [
        'options' => 'array',
    ];

    /**
     * Get all companies with cleaning/inspection pending jobs.
     */
    public function pendingJobsPerCompany()
    {
        return $this->morphMany('App\Company', 'parentable_jobs');
    }

    /**
     * Get all companies with cleaning/inspection pending jobs.
     */
    public function approvedJobsPerCompany()
    {
        return $this->morphMany('App\Company', 'parentable_jobs');
    }
}
