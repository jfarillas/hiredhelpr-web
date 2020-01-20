<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Maintenance extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    /* protected $fillable = [
        'issues_id'
    ]; */

    /**
     * Get all issues per property/company.
     */
    public function issues()
    {
        return $this->belongsTo('App\Issue', 'id');
    }

    /**
     * Get all properties/companies subject for maintenance.
     */
    public function subjectForMaintenance()
    {
        return $this->morphMany('App\Company', 'parentable');
    }
}