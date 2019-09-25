export class Controller {
  private statusCode?: number = undefined;
  private headers = {} as { [name: string]: string | undefined };
  private cookies = [] as { name: string; value: string; options?: any }[];

  public setStatus(statusCode: number) {
    this.statusCode = statusCode;
  }

  public getStatus() {
    return this.statusCode;
  }

  public setHeader(name: string, value?: string) {
    this.headers[name] = value;
  }

  public getHeader(name: string) {
    return this.headers[name];
  }

  public getHeaders() {
    return this.headers;
  }

  public setCookie(name: string, value: string, options?: any) {
    this.cookies.push({ name, value, options });
  }

  public getCookies(): { name: string; value: string; options?: any }[] {
    return this.cookies;
  }
}
