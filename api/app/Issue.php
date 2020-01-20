<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Issue extends Model
{
    /**
     * Get all issues per company subject for maintenance.
     */
    public function parentable()
    {
        return $this->morphTo();
    }

    /**
     * Get all issues for maintenance.
     */
    public function maintenances()
    {
        return $this->hasMany('App\Maintenance');
    }
}
