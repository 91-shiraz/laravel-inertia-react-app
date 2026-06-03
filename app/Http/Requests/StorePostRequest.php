<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:50',
            'description' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:5120',
        ];
    }
    public function messages(): array
    {
        return [
            'title.required' => 'Post Title is Required!!',
            'title.max' => 'Post Title Must be Less than 255 Characters!!',
            'category.required' => 'Post Category is Required!!',
            'category.max' => 'Post Category Must be Less than 50 Characters!!',
            'description.required' => 'Post Description is Required!!',
            'image.required' => 'Post Image is Required!!',
            'image.image' => 'Post Image Must be an Image!!',
            'image.mimes' => 'Post Image Must be a JPG, JPEG, PNG!!',
            'image.max' => 'Post Image Must be Less than 5MB!!',
        ];
    }
}
