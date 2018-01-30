import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ProjectsService} from "../../models/project/ProjectsService";

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  public apiUrl = 'https://api.hetzner.cloud/v1';

  constructor(public http: HttpClient, public projectService: ProjectsService) {
    console.log('Hello RestProvider Provider');
  }

  getServers(searchTerm = null) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/servers' + (searchTerm == null ? '' : '?name=' + searchTerm), {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.projectService.actual_project.api_key).set('Accept', 'application/json'),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getServer(serverId) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/servers/' + serverId, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.projectService.actual_project.api_key).set('Accept', 'application/json'),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  createServer(name, server_type, location, start_after_create, image, ssh_keys) {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/servers', {
        name: name,
        server_type: server_type,
        location: location,
        start_after_create: start_after_create,
        image: image,
        ssh_keys: ssh_keys
      }, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.projectService.actual_project.api_key).set('Accept', 'application/json'),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  powerOn(serverId) {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/servers/' + serverId + '/actions/poweron', {}, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.projectService.actual_project.api_key).set('Accept', 'application/json'),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  shutdown(serverId) {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/servers/' + serverId + '/actions/shutdown', {}, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.projectService.actual_project.api_key).set('Accept', 'application/json'),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  powerOff(serverId) {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/servers/' + serverId + '/actions/poweroff', {}, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.projectService.actual_project.api_key).set('Accept', 'application/json'),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  enable_rescue(serverId) {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/servers/' + serverId + '/actions/enable_rescue', {}, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.projectService.actual_project.api_key).set('Accept', 'application/json'),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  disable_rescue(serverId) {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/servers/' + serverId + '/actions/disable_rescue', {}, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.projectService.actual_project.api_key).set('Accept', 'application/json'),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  reboot(serverId) {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/servers/' + serverId + '/actions/reboot', {}, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.projectService.actual_project.api_key).set('Accept', 'application/json'),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  delete(serverId) {
    return new Promise(resolve => {
      this.http.delete(this.apiUrl + '/servers/' + serverId, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.projectService.actual_project.api_key).set('Accept', 'application/json'),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  /**
   *
   * Locations
   */

  getLocations(searchTerm = null) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/locations' + (searchTerm == null ? '' : '?name=' + searchTerm), {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.projectService.actual_project.api_key).set('Accept', 'application/json'),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  /**
   *
   * Images
   */

  getImages(searchTerm = null) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/images' + (searchTerm == null ? '' : '?name=' + searchTerm), {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.projectService.actual_project.api_key).set('Accept', 'application/json'),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  /**
   *
   * SSHKeys
   */

  getSSHKeys(searchTerm = null) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/ssh_keys' + (searchTerm == null ? '' : '?name=' + searchTerm), {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.projectService.actual_project.api_key).set('Accept', 'application/json'),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  /**
   *
   * SSHKeys
   */

  getServerTypes(searchTerm = null) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/server_types' + (searchTerm == null ? '' : '?name=' + searchTerm), {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.projectService.actual_project.api_key).set('Accept', 'application/json'),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
