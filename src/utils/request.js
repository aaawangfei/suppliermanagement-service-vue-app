import $ from 'jquery'
import router from '@/router'
import {getToken } from '../utils/auth'

export function getAjax(url, datas = {}) {
	return new Promise((resolve, reject) => {

		$.ajax({
			type: 'GET',
			url: url,
			data: datas,
			headers: {
				//sessionStorage.carUserId
				token: getToken(),
//				userId:sessionStorage.carUserId
               userId:"402885a1732201f70173231c16de018f"
			},
			success: function(data) {
				resolve(data);
			},
			error: function(err) {
				reject(err);
			}
		});
	});
}
export function getAjaxNoheader(url, datas = {}) {
	return new Promise((resolve, reject) => {

		$.ajax({
			type: 'GET',
			url: url,
			data: datas,
			headers: {

			},
			success: function(data) {
				resolve(data);
			},
			error: function(err) {
				reject(err);
			}
		});
	});
}

export function postAjax(url, datas = {},headers = {}) {
	return new Promise((resolve, reject) => {

		$.ajax({
			type: 'POST',
			url: url,
			data: datas,
			headers: {
				'Content-Type':"application/json",
				token: getToken(),
				userId:sessionStorage.carUserId,
				...headers
			},
			success: function(data) {
				resolve(data);
			},
			error: function(err) {
				reject(err);
			}
		});
	});
}

export function deleteAjax(url, datas = {}) {
	return new Promise((resolve, reject) => {

		$.ajax({
			type: 'DELETE',
			url: url,
			data: datas,
			headers: {
				token: getToken(),
				userId:sessionStorage.carUserId
			},
			success: function(data) {
				resolve(data);
			},
			error: function(err) {
				reject(err);
			}
		});
	});
}

export function putAjax(url, datas = {}) {
	return new Promise((resolve, reject) => {

		$.ajax({
			type: 'PUT',
			url: url,
			data: datas,
			headers: {
				token: getToken(),
				userId:sessionStorage.carUserId
			},
			success: function(data) {
				resolve(data);
			},
			error: function(err) {
				reject(err);
			}
		});
	});
}
