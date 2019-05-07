<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        switch ($this->method()) {
            case 'POST':
                {
                    return [
                        'name' => 'required|string',
                        'title' => 'required|string',
                        'description' => 'required|string|max:320',
                        'slug' => 'unique:posts',
                    ];
                }
            case 'PUT':
            case 'PATCH':
                {
                    return [
                        'name' => 'required|string|max:191',
                        'title' => 'required|string|max:191',
                        'description' => 'required|string|max:320',
                    ];
                }
            default:
                break;
        }
    }
}
