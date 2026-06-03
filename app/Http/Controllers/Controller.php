<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;

abstract class Controller
{
    public function storeImage($folderName, $file)
    {
        try {
            return Storage::disk('website')->put($folderName, $file);
        } catch (\Exception $e) {
            return '';
        }
    }

    public function deleteImage($file)
    {
        try {
            return Storage::disk('website')->delete($file);
        } catch (\Exception $e) {
            return '';
        }
    }
}
