<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\api\ResponseController as ResponseController;
use App\Company;
use App\Job;
use Session;

class JobsController extends ResponseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function status(Request $request, $status)
    {
        $bearerToken = $request->header('Authorization');

        if (isset($bearerToken)) {

            if (!empty(count($this->getPendingJobsPerCompany($status)))) {
                return $this->sendResponse($this->getPendingJobsPerCompany($status), $bearerToken);
            } else {
                $error = "Properties not found";
                return $this->sendError($error);
            }

        } else {
            $error = "Unable to access this API";
            return $this->sendError($error);
        }
    }

    /**
     * Display a count of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function statusCount(Request $request, $status)
    {
        $bearerToken = $request->header('Authorization');

        if (isset($bearerToken)) {

            if (!empty(count($this->getJobsCountPerStatus($status)))) {
                return $this->sendResponse($this->getJobsCountPerStatus($status), $bearerToken);
            } else {
                $error = "Properties not found";
                return $this->sendError($error);
            }

        } else {
            $error = "Unable to access this API";
            return $this->sendError($error);
        }
    }

    public function getPendingJobsPerCompany(String $status = NULL)
    {
        $jobs = Job::where('status', $status)->get();

        // Collection of jobs
        $jobsAry = [];
        $ctr = 0;

        foreach ($jobs as $job) {

            $jobs = Job::find($job->id);

            // Get custom attributes
            $options = $jobs->options;

            $jobs->pendingJobsPerCompany;

            // Get current service type
            if (!empty($jobs->pendingJobsPerCompany[$ctr]->parentable_cleanings_id)) {
                $options['service_type'] = 'cleaning';
                $jobs->options = $options;
            }

            if (!empty($jobs->pendingJobsPerCompany[$ctr]->parentable_inspections_id)) {
                $options['service_type'] = 'inspect';
                $jobs->options = $options;
            }

            array_push($jobsAry, $jobs);
        }
        
        return $jobsAry;
    }

    public function getJobsCountPerStatus(String $status = NULL)
    {
        $jobs = Job::where('status', $status)->count();

        // Collection of jobs
        $jobsAry['total'] = $jobs;
        
        return $jobsAry;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
