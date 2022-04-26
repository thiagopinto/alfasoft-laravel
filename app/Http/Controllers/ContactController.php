<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;
use Illuminate\Support\Facades\Storage;
use App\Models\Contact;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $per_page = $request->has('per_page') ? $request->get('per_page') : 10;

        return Contact::orderBy('updated_at', 'desc')->paginate($per_page);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreContactRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreContactRequest $request)
    {
        $request->validate([
            'name' => 'required|min:6',
            'email' => 'required|email',
            'contact' => 'required|size:9',
            'photo.*' => 'mimes:doc,pdf,docx,zip,jpeg,png,jpg,gif,svg',
        ]);

        $contact = $request->all();

        if ($file = $request->hasFile('photo')) {
            $file = $request->file('photo') ;
            $path = $file->store('public/photo');
            $contact['photo'] = Storage::url($path);
        }

        return Contact::create($contact);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function show(Contact $contact)
    {
        return $contact;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateContactRequest  $request
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateContactRequest $request, Contact $contact)
    {
        $request->validate([
            'name' => 'required|min:6',
            'email' => 'required|email',
            'contact' => 'required|size:9',
        ]);

        $contactForm = $request->all();

        if ($file = $request->hasFile('photo')) {
            $file = $request->file('photo') ;
            $path = $file->store('public/photo');
            $contact->photo = Storage::url($path);
        }

        $contact->name = $contactForm['name'];
        $contact->email = $contactForm['email'];
        $contact->phone = $contactForm['phone'];

        $contact->save();

        return $contact;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
    {
        return $contact->delete();
    }
}
