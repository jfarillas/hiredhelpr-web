<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\api\ResponseController as ResponseController;
use App\Maintenance;
use App\Company;
use App\Issue;

class MaintenanceController extends ResponseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $bearerToken = $request->header('Authorization');

        if (isset($bearerToken)) {
            // This ID is from pending jobs
            $id = 2;

            if (!empty(count($this->getCompaniesByMaintenance($id)))) {
                return $this->sendResponse($this->getCompaniesByMaintenance($id), $bearerToken);
            } else {
                $error = "Properties not found";
                return $this->sendError($error);
            }
        } else {
            $error = "Unable to access this API";
            return $this->sendError($error);
        }
        
    }

    public function getCompaniesByMaintenance(Int $id = NULL)
    {
        $maintenance = Maintenance::find($id); 
        $subjectForMaintenance = $maintenance->subjectForMaintenance;

        if (!empty(count($subjectForMaintenance))) {
            $dataAry = [];
            $dataArySub = [];
            $ctr = 0;

            foreach ($subjectForMaintenance as $data) {
                array_push($dataAry, $data);
            }

            foreach ($dataAry as $rs) {
                $dataArySub[$ctr]['id'] = $rs->id;
                $dataArySub[$ctr]['issues'] = $this->getIssuesByCompany($rs->id);
                $dataArySub[$ctr]['address'] = $rs->address;
                $dataArySub[$ctr]['owner'] = $rs->owner;
                $dataArySub[$ctr]['fullname'] = $rs->fullname;
                $dataArySub[$ctr]['email'] = $rs->email;
                $dataArySub[$ctr]['dob'] = $rs->dob;
                $dataArySub[$ctr]['city'] = $rs->city;
                $dataArySub[$ctr]['status'] = $rs->status;
                $ctr++;
            }

            return $dataArySub;

        } else {
            return [];
        }
    }

    public function getIssuesByCompany(Int $id = NULL)
    {
        $companyWithIssues = Company::find($id);
        $maintenanceIssues = $companyWithIssues->issuesToBeFixed;

        return (!empty(count($maintenanceIssues))) ? $maintenanceIssues : [];
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
